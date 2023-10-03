import ProjectService from '../../models/projects'
import PersonService from '../../models/people'
import ImageService from '../../models/images'
import { PersonCard, PersonModal } from '../../components/Personcard'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Thumbnail({ url }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(null)

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(url)
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1 })
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = viewport.width
        canvas.height = viewport.height

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        }
        page.render(renderContext).promise.then(() => {
          const thumbUrl = canvas.toDataURL('image/jpeg')
          setThumbnailUrl(thumbUrl)
        })
      })
    })
  }, [url])

  return thumbnailUrl ? <img src={thumbnailUrl} alt="Thumbnail" className="w-100 h-100 image-fluid" /> : <p>Loading Thumbnail...</p>
}

function TeamMembers({ p }) {
  if ('people' in p && Array.isArray(p.people) && p.people.length > 0) {
    return PersonService.getPeople({ id__in: p.people }).map((person) => (
      <li key={'student-' + person.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-3">
        <PersonCard person={person} />
      </li>
    ))
  }
  return <li><em>Currently No Team Members Listed</em></li>
}

function Artifacts({ p }) {
  if ('Media' in p && Array.isArray(p.Media) && p.Media.length > 0) {
    return (
      <>
        <dt className="text-center pt-2" style={{ color: '#404040' }}>Artifacts</dt>
        <dd>
          <ul className="row d-flex justify-content-center">
            {p.Media.map((mediaId) => {
              const media = ImageService.getImages({ id__eq: mediaId })
              if (media && media.length > 0) {
                return (
                  <li
                    key={`media-${media[0].id}`}
                    className="col-12 col-sm-12 col-lg-6 col-xl-4 col-xxl-4 d-flex flex-column my-3"
                  >
                    <div className="flex-grow-1 d-flex flex-column justify-content-center">
                      <div className="text-center h-100">
                        {media[0].url && media[0].mime === 'application/pdf' && (
                          <Thumbnail url={media[0].url} />
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <a href={media[0].url}>
                        {media[0].mime} | {media[0].name}
                      </a>
                    </div>
                  </li>
                )
              }
              return null
            })}
          </ul>
        </dd>
      </>
    )
  }

  return null
}

function Links({ p }) {
  const links = [
    { key: 'GitHub', value: p.gitHubLink },
    { key: 'Website', value: p.websiteLink }
  ]

  return (
    <>
      {links.map((link) =>
        link.value ? (
          <React.Fragment key={link.key}>
            <dt>{link.key}:</dt>
            <dd>
              <a href={link.value}>{link.value}</a>
            </dd>
          </React.Fragment>
        ) : null
      )}
    </>
  )
}

function FeaturedMedia({ p }) {
  if (p.videoLink) {
    return (
      <div className="row py-5">
        <div className="col-md-4 d-flex flex-column justify-content-between">
          <div className="text-center">
            <h3 style={{color: '#404040'}}>Description:</h3>
            <p>{p.Description}</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="text-center">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={p.videoLink} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }

  else if ('Media' in p && Array.isArray(p.Media) && p.Media.length > 0) {
    return (
      <div className="row py-5">
        <div className="col-md-4 d-flex flex-column justify-content-between">
          <div className="text-center">
            <h3 style={{color: '#404040'}}>Description:</h3>
            <p>{p.Description}</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="text-center">
            {p.Media.map((mediaId) => {
              const media = ImageService.getImages({ id__eq: mediaId })
              if (media.length > 0 && media[0].url && media[0].mime === "application/pdf") {
                return <Thumbnail key={`media-${media[0].id}`} url={media[0].url} />
              }
              return null
            })}
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default function Project({ projectid }) {
  const p = ProjectService.getProject({ id__eqstr: projectid })
  const router = useRouter()

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col">
            <div className="text-left">
              <button type="button" className="btn btn-dark" onClick={() => router.back()}>&larr Back to Previous Page</button>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col">
            <div>
              <h1 className="text-center">
                <span style={{ borderBottom: '3px solid #d73f09', fontWeight: 'bold' }}>
                  {p.Name.toString()}
                </span>
              </h1>
              <div className="text-center">
                <h5 className='pt-2' style={{ color: '#bbbbbb' }}>Published {p.formattedInitialPublishedDate}</h5>
              </div>
              <FeaturedMedia p={p} />
              <div className='text-center pb-3'>
                <h2 style={{color: '#404040'}}>Team Members</h2>
              </div>
              <ul className="row">
                <TeamMembers p={p} />
              </ul>
              <Artifacts p={p} />
              <Links p={p} />
            </div>
          </div>
        </div>
      </div>
      <PersonModal />
    </>
  )
}

export async function getStaticPaths() {
  const projects = ProjectService.getProjects()
  const paths = projects.map((project) => ({ params: { projectid: project.id.toString() } }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context) {
  return { props: { projectid: context.params.projectid } }
}

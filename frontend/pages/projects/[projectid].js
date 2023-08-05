import ProjectService from '../../models/projects'
import PersonService from '../../models/people'
import ImageService from '../../models/images'
import { PersonCard, PersonModal } from '../../components/Personcard'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import { pdfjs } from 'react-pdf'; 
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Thumbnail({ url }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(null);

  useEffect(() => {
    const loadingTask = pdfjs.getDocument(url);
    loadingTask.promise.then((pdf) => {
      pdf.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext).promise.then(() => {
          const thumbUrl = canvas.toDataURL('image/jpeg');
          setThumbnailUrl(thumbUrl);
        });
      });
    });
  }, [url]);

  return thumbnailUrl ? <img src={thumbnailUrl} alt="Thumbnail" className='w-50'/> : <p>Loading Thumbnail...</p>;
}

function TeamMembers ({ p }) {
  if ('people' in p && Array.isArray(p.people) && p.people.length > 0) {
    return PersonService
      .getPeople({ id__in: p.people })
      .map((person) => <li key={'student-' + person.id} className='col-12 col-sm-6 col-lg-4 col-xl-3 col-xxl-3'><PersonCard person={person} /></li>)
  }
  return <li><em>Currently No Team Members Listed</em></li>
}

function Artifacts ({ p }) {
  if ('Media' in p && Array.isArray(p.Media) && p.Media.length > 0) {
    return ImageService
      .getImages({ id__in: p.Media })
      .map((media) => (
        <li key={'media-' + media.id} className='col-12 col-sm-12 col-lg-6 col-xl-4 col-xxl-4'>
          <div className="text-center">
            {media.url && media.mime === "application/pdf" && <Thumbnail url={media.url} />}
          </div>
          <div className='text-center'>
            <a href={media.url}>{media.mime} | {media.name}</a>
          </div>
        </li>
      ))
  }
  return <li><em>Currently No Artifacts</em></li>
}

function Links ({ p }) {
  const links = [
    { key: 'GitHub', value: p.gitHubLink },
    { key: 'Website', value: p.websiteLink }
  ];

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
  );
};

function FeaturedMedia ({ p }) {
  if (p.videoLink) {
    return (
      <div className='row py-4'>
        <div className='col'>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='embed-responsive-item' src={p.videoLink} allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  } else if ('Media' in p && Array.isArray(p.Media) && p.Media.length > 0) {
    const media = ImageService.getImages({ id__in: p.Media })[0]
    return (
      <div className='row'>
        <div className='col'>
          <div className="text-center">
            {media.url && media.mime === "application/pdf" && <Thumbnail url={media.url} />}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default function Project ({ projectid }) {
  const p = ProjectService.getProject({ id__eqstr: projectid })
  const router = useRouter()

  return (
    <>
      <div className='container pt-5'>
        <div className='row'>
          <div className='col'>
            <div className='text-left'>
              <button type='button' className='btn btn-dark' onClick={() => router.back()}>&larr; Back to Previous Page</button>
            </div>
          </div>
        </div>
        <div className='row pt-4'>
          <div className='col'>
            <div>
              <h1 className='text-center'>Project: {p.Name.toString()}</h1>
              <dl>
                <dt>Description:</dt>
                <dd>{p.Description}</dd>
                <dt>Published date:</dt>
                <dd>{p.formattedInitialPublishedDate}</dd>
                <Links p={p} />
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <FeaturedMedia p={p} />
        <div className='row'>
          <div className='col'>
            <dl>
              <dt>Team Members:</dt>
              <dd><ul className='row'><TeamMembers p={p} /></ul></dd>
              <dt>Artifacts</dt>
              <dd><ul className='row'><Artifacts p={p} /></ul></dd>
            </dl>
          </div>
        </div>
      </div>
      <PersonModal />
    </>
  )
}

export async function getStaticPaths () {
  const projects = ProjectService.getProjects()
  const paths = []
  for (const i in projects) {
    const project = projects[i]
    paths.push({ params: { projectid: project.id.toString() } })
  }
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps (context) {
  return { props: { projectid: context.params.projectid } }
}

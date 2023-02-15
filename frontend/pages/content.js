import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { CarouselItemPlaceholder } from '../components/Carousel'
import PageService from '../models/pages'
import Page from '../components/PageParts'


const Content = (x) => {
  const router = useRouter()
  const { path } = router.query
  const page = PageService.getPage({'URLPath__eq': x.path})
  /*const pagepartListDisplay = page.pageparts.map((pagepart) =>
    <PageContent key={pagepart.id} rows={pagepart} />
  )
  const pagepartListDisplay = ""*/

  return (
    <>
      <div className='container-fluid px-0'>
      <Page page={page} />
        {/*<div className='row py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <div className='text-center'>
                    <h1>About Soundbendor Labs</h1>
                    <img className='w-100' src='http://www.soundbendor.org/assets/images/neural-net-animation.gif' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row bg-dark py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col-4'>
                  <CarouselItemPlaceholder isActive='1' name='Placeholder' bg='#777' color='#000' />
                </div>
                <div className='col-8 text-light'>
                  <h3>topic 1</h3>
                  <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas senectus urna turpis dapibus penatibus cras molestie. Vestibulum quisque felis interdum in malesuada magnis class natoque. Ante natoque tristique bibendum at sapien senectus eros magnis. Eleifend eu class ante a interdum leo. Nascetur molestie eleifend nostra vehicula imperdiet felis non. Rhoncus tristique platea; mauris blandit tempus curae.</p><p>Integer netus luctus suspendisse litora interdum quis. Tristique litora egestas; enim fames viverra eget adipiscing. Sem nullam justo conubia quisque pharetra luctus. Sed dictumst condimentum placerat mauris ornare vel. Lacus leo natoque massa semper; est justo vehicula. Ridiculus ridiculus ante senectus in torquent. Felis nisi amet imperdiet; curabitur dapibus ipsum nascetur. Quis tincidunt platea vitae laoreet fringilla. Vel id rhoncus duis eu fringilla.</p><p>Porta bibendum egestas sapien curae neque? Hendrerit hendrerit velit; tellus ipsum senectus a feugiat. Maximus nec tempus enim, inceptos sapien at tellus hendrerit. Felis montes cubilia netus quisque mattis, habitasse maecenas? Velit magna eu aenean nam torquent tellus magna etiam. Enim luctus elementum erat ornare euismod imperdiet vehicula pellentesque. Felis curae nunc morbi efficitur vestibulum felis. Sit ornare nascetur, donec rhoncus consectetur taciti volutpat parturient eros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row bg-light py-5'>
          <div className='col'>
            <div className='container'>
              <div className='row'>
                <div className='col-8 text-dark'>
                  <h3>topic 2</h3>
                  <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Maecenas senectus urna turpis dapibus penatibus cras molestie. Vestibulum quisque felis interdum in malesuada magnis class natoque. Ante natoque tristique bibendum at sapien senectus eros magnis. Eleifend eu class ante a interdum leo. Nascetur molestie eleifend nostra vehicula imperdiet felis non. Rhoncus tristique platea; mauris blandit tempus curae.</p><p>Integer netus luctus suspendisse litora interdum quis. Tristique litora egestas; enim fames viverra eget adipiscing. Sem nullam justo conubia quisque pharetra luctus. Sed dictumst condimentum placerat mauris ornare vel. Lacus leo natoque massa semper; est justo vehicula. Ridiculus ridiculus ante senectus in torquent. Felis nisi amet imperdiet; curabitur dapibus ipsum nascetur. Quis tincidunt platea vitae laoreet fringilla. Vel id rhoncus duis eu fringilla.</p><p>Porta bibendum egestas sapien curae neque? Hendrerit hendrerit velit; tellus ipsum senectus a feugiat. Maximus nec tempus enim, inceptos sapien at tellus hendrerit. Felis montes cubilia netus quisque mattis, habitasse maecenas? Velit magna eu aenean nam torquent tellus magna etiam. Enim luctus elementum erat ornare euismod imperdiet vehicula pellentesque. Felis curae nunc morbi efficitur vestibulum felis. Sit ornare nascetur, donec rhoncus consectetur taciti volutpat parturient eros.</p>
                </div>
                <div className='col-4'>
                  <CarouselItemPlaceholder isActive='1' name='Placeholder' bg='#777' color='#000' />
                </div>
              </div>
            </div>
          </div>
        </div>*/}

      </div>
    </>
  )
}

Content.getInitialProps = async function (context) {
  return {'path':context.query.path}
}

Content.getLayout = function getLayout (page) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Content

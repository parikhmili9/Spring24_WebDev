import { useLocation} from 'react-router-dom'
import '../index.css'
import { FaBars } from 'react-icons/fa'

interface BreadcrumbStyle {
  '--bs-breadcrumb-divider'?: string;
  marginLeft?: string;
  marginTop?: string;
  fontSize?: string;
  display?: string;
}

const BreadcrumbCust = () => {
  // const { courseId } = useParams()
  const { pathname } = useLocation()
  const [screen] = pathname.split('/')
  // const [empty, kanbas, courses, id, screen] = pathname.split('/')
  // const course = db.courses

  const breadcrumbStyle: BreadcrumbStyle = {
    '--bs-breadcrumb-divider': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')",
    marginLeft: '50px',
    marginTop: '10px',
    fontSize: '20px',
    display: 'flex',
  };

  return (
    <div>
      <i className='fa fa-bars ' aria-hidden='true'>
      <nav style={breadcrumbStyle} 
             aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
                <a href='#top' style={{ textDecoration: 'none', color: 'red', fontSize: '15px'}}>
                    <FaBars style={{ marginRight: '10px', fontSize: '20px' }} />
                    CS5200.MERGED.202330
                </a>
            </li>
            <li className='breadcrumb-item active' aria-current='page' style={{fontSize: '20px'}}>
                {screen}
            </li>
        </ol>
        {/* <button className='float-end' style={{ marginLeft: 'auto' }}>
          <BiGlassesAlt style={{ width: '30px', fontSize: '20px' }} />
          Student View
        </button> */}
      </nav>
      <hr style={{ marginLeft: '20px' }}></hr>
    </i>
    </div>
    
  )
}

export default BreadcrumbCust
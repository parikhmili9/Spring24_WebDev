import ModuleList from '../Modules/list'
import './index.css'
function Home () {
  return (
    <div className='row' style={{position: 'relative'}}>
      <div className='col-9'>
        <ModuleList />
      </div>
      <div className='col-3'>
        <div className='wd-main-navigation d-none d-lg-block' style={{ position: 'relative', marginLeft: 10, marginRight: 10 }}>
          <h3>Course Status</h3>
          <div>
            <span className='w-100'>
                <button className='w-50' type="button" style={{fontSize: 'small'}}>
                    <i className="fa fa-ban" aria-hidden="true"></i>
                    Unpublished
                </button>
                <button className='w-50' type="button" style={{backgroundColor: 'green', fontSize: 'small', color: 'white', opacity: 0.5, pointerEvents: 'none'}}>
                    <i className="fa fa-check-circle " style={{color: 'white'}} aria-hidden="true"></i>
                    Published
                </button>
            </span>
          </div>
          <br />
          <div className='main_btn'>
            <button className='course-status-button w-100'>
              <i className='fa fa-file-o' aria-hidden='true' />
                Import Existing Content
            </button><br/>
            <button className='course-status-button w-100'>Import from Commons</button><br/>
            <button className='course-status-button w-100'>Choose Home Page</button><br/>
            <button className='course-status-button w-100'>View Course Stream</button><br/>
            <button className='course-status-button w-100'>New Announcement</button><br/>
            <button className='course-status-button w-100'>New Analytics</button><br/>
            <button className='course-status-button w-100'>View Course Notifications</button><br/>
          </div>
          <br />

            <h5>To Do</h5>
            <ul className='navigation'>
                <li style={{fontSize: 'small'}}>
                    <a href="/Kanbas/Courses/Grades/screen.html">
                        Grade A1 - ENV + HTML
                    </a>
                    <br/>
                    100 points | Sep 18 - 11.59 pm
                </li>
                <li style={{fontSize: 'small'}}>
                    <a href="/Kanbas/Courses/Grades/screen.html">
                        Grade A1 - ENV + HTML
                    </a>
                    <br/>
                    100 points | Sep 18 - 11.59 pm
                </li>
                <li style={{fontSize: 'small'}}>
                    <a href="/Kanbas/Courses/Grades/screen.html">
                        Grade A1 - ENV + HTML
                    </a>
                    <br/>
                    100 points | Sep 18 - 11.59 pm
                </li>
            </ul>
          <hr />
          <h3>Course Status</h3>
          <a href='#'>View Calander</a>
          <ul className='navigation'>
            <li>
              <a href='#'>Lecture at 11:30pm</a>
            </li>
            <li>
              <a href='#'>Lecture at 11:30pm</a>
            </li>
            <li>
              <a href='#'>Lecture at 11:30pm</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Home
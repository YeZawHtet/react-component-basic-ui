import React from 'react'
import vape1 from './images/sightseeing.png';
import vape2 from './images/cruises.png';
import vape3 from './images/package-tour.png';
export default function Service() {
  return (
    <div className="mb-3">
      <h3 className="text-center mt-3 mb-3">Service Section</h3>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="p-3 bg-success rounded">
              <img src={vape1} className="img-fluid rounded" alt="sightseeing photo" style={{ width: '200px', height: '200px' }} />
              <h3 className="text-center">
                <a href="#" className="text-decoration-none text-dark">Sightseeing</a>
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="p-3 bg-success rounded">
              <img src={vape2} className="img-fluid rounded" alt="cruises photo" style={{ width: '200px', height: '200px' }} />
              <h3 className="text-center">
                <a href="#" className="text-decoration-none text-dark">Cruises</a>
              </h3>
            </div>
          </div>
          <div className="col">
            <div className="p-3 bg-success rounded">
              <img src={vape3} className="img-fluid rounded" alt="package tour photo" style={{ width: '200px', height: '200px' }} />
              <h3 className="text-center">
                <a href="#" className="text-decoration-none text-dark">Package Tour</a>
              </h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

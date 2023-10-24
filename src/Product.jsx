import React from 'react'

export default function Product(props) {
  return (
    <div className="col-lg-4 p-3">
          <div className="card">
            <div className="card-header">Apple</div>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.desc}</p>
              <a href="#" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
  )
}

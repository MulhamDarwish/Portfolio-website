import React from 'react'
import './experience.css'
import {BsFillCheckSquareFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>HTML/CSS</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>React</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>JavaScript</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>Kubernetes</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>Prometheus</h4>
              </div>
              <small className="text-light">Experience</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>Adobe Ilistrator</h4>
              </div>
              <small className="text-light">Experience</small>
            </article>
          </div>
        </div>
{/* end */}     

        <div className="experience__backend">
        <h3>Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>Adobe Ilistrator</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>Adobe Photoshop</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>AutoCad</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>3DMax autodesk</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>Blender</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill className="experience__details-icon" />
              <div>
              <h4>Unreal Engine</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience
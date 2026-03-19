import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Building Interactive UIs</h4>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React</div>
                <div className="what-tags">Vue</div>
                <div className="what-tags">Angular</div>
                <div className="what-tags">JavaScript (ES6+)</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3/Tailwind</div>
                <div className="what-tags">Webpack</div>
                <div className="what-tags">Redux/Zustand</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Scalable Server Architecture</h4>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Django/FastAPI</div>
                <div className="what-tags">Java/Spring</div>
                <div className="what-tags">RESTful APIs</div>
                <div className="what-tags">GraphQL</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Authentication</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DATA & DATABASES</h3>
              <h4>Data Engineering & Storage</h4>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">SQL</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">NoSQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Redis</div>
                <div className="what-tags">ETL Pipelines</div>
                <div className="what-tags">Apache Spark</div>
                <div className="what-tags">Airflow</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 3)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI/ML & DATA SCIENCE</h3>
              <h4>Intelligent Solutions & Analytics</h4>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">Vector Databases</div>
                <div className="what-tags">Pinecone/Milvus</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">Scikit-learn</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 4)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DEVOPS & CLOUD</h3>
              <h4>Infrastructure & Deployment</h4>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS</div>
                <div className="what-tags">GCP</div>
                <div className="what-tags">Azure</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">Kubernetes</div>
                <div className="what-tags">CI/CD</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">GitHub Actions</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

import React from 'react'

const Homepage_content = () => {
  return (
      <>
    <style jsx>
        {
        `
        .container {
            max-width: 1050px;
            width: 90%;
            margin: auto;
          }
          
          .sect1 {
            padding: 1.5em 2.5em;
            background-size: cover;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
          }
          
          .sect1 .button {
            cursor: pointer;
            margin: 3em 0 2em 0;
            font-size: 1.25rem;
            padding: 0.75em 1.5em;
            margin-inline: auto;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            block-size: -webkit-fit-content;
            block-size: -moz-fit-content;
            block-size: fit-content;
            border-radius: 0.5em;
            background-color: #4949d1;
            -webkit-box-shadow: -5px 5px 5px #5ba3a3;
            box-shadow: -5px 5px 5px #5ba3a3;
          }
          
          .sect1 .button a {
            color: white;
            font-weight: 500;
          }
          
          .sect1 .button:hover a {
            color: #0b0b7c;
          }
          
          .sect1 .text {
            padding-top: 4em;
          }
          
          .sect1 .text h1 {
            line-height: 1.25;
            color: black;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 2.5rem;
          }
          
          .sect1 .text .heading2 {
            font-size: 3.25rem;
          }
          
          .sect2 {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            padding: 1.5em 2.5em;
          }
          
          .sect2 .grid1 {
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: (1fr) [2];
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            grid-auto-rows: minmax(25px, auto);
          }
          
          .sect2 .grid1 .image {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-grid-column: 1;
            -ms-grid-column-span: 1;
            grid-column: 1/2;
            -ms-grid-row: 1;
            -ms-grid-row-span: 2;
            grid-row: 1/3;
          }
          
          .sect2 .grid1 .number {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-grid-column: 2;
            -ms-grid-column-span: 1;
            grid-column: 2/3;
            -ms-grid-row: 1;
            -ms-grid-row-span: 1;
            grid-row: 1/2;
          }
          
          .sect2 .grid1 .status-title {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -ms-grid-column: 2;
            -ms-grid-column-span: 1;
            grid-column: 2/3;
            -ms-grid-row: 2;
            -ms-grid-row-span: 1;
            grid-row: 2/3;
          }
          
          .sect2 .art-1 {
            background-color: #5e5ef1;
          }
          
          .sect2 .art-2 {
            background-color: #30df4d;
          }
          
          .sect2 .art-3 {
            background-color: #f18ebc;
          }
          
          .sect2 .art-4 {
            background-color: #f08f8f;
          }
          
          .sect2 article + article {
            margin-top: 1em;
          }
          
          .sect2 article {
            width: 80vw;
            padding: 1em 1em 1em 0;
            text-align: center;
            border-radius: 10px;
          }
          
          .sect2 article .number {
            font-size: 1.5rem;
          }
          
          .sect3 {
            padding: 1.5em 2.5em;
          }
          
          .sect3 p {
            font-size: 2rem;
            margin-bottom: 0.75em;
          }
          
          .sect3 ul {
            display: -ms-grid;
            display: grid;
            -ms-grid-columns: (1fr) [2];
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            grid-auto-rows: minmax(25px, auto);
          }
          
          .sect3 ul li {
            background-color: #4949d1;
            padding: 0.6em 0.5em;
            text-align: center;
            border-radius: 5px;
            color: white;
          }
          
          .sect3 ul li a {
            color: white;
          }
          
          .sect4 {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            width: 100%;
            margin: 0 auto;
            padding: 1.5em 2.5em;
          }
          
          .sect4 .list-head {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          
          .sect4 .list-head .search {
            height: 2.25em;
            width: 100%;
            margin: 1em 0;
            padding: 0.5em;
            border: 1px solid black;
          }
          
          .sect4 .tender-list {
            height: 50vh;
            width: 100%;
            border: 1px solid black;
            color: black;
            font-size: 1.25rem;
            background-color: #a9ccff;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          
          .sect4 .tender-list .headers {
            background-color: #526be4;
          }
          
          .sect4 .tender-list .headers .header .tender-header {
            color: black;
          }
          
          @media (min-width: 420px) {
            nav .menu-items {
              padding-top: 0;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-direction: row;
              flex-direction: row;
            }
          }
          
          ::-webkit-scrollbar {
            height: 0;
          }
          
          ::-webkit-scrollbar-track {
            border-radius: 100vw;
            background: #c6e7fc;
          }
          
          ::-webkit-scrollbar-thumb {
            border: 3px solid var(--light-blue);
            border-radius: 100vw;
            background: #4949d1;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #40669c;
          }
          
          @supports (scrollbar-color: red blue) {
            * {
              scrollbar-color: #062653 #c6e7fc;
            }
          }
          
          @media (max-width: 768px) {
            ::-webkit-scrollbar-track {
              margin-top: 0;
            }
          }
          
          @media (min-width: 800px) {
            .nav-container {
              max-width: 2000px;
              width: 100%;
              padding: 0 2.5rem;
            }
            .sect1 {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-direction: row;
              flex-direction: row;
              padding: 0 100px;
              margin-top: 20px;
            }
            .sect1 .part-1 {
              width: 50%;
            }
            .sect1 .part-1 p {
              margin-top: 20px;
              text-align: center;
              line-height: 1.2;
            }
            .sect1 .part-1 .title-flex {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-orient: horizontal;
              -webkit-box-direction: normal;
              -ms-flex-direction: row;
              flex-direction: row;
            }
            .sect1 .part-1 .title-flex h1 + h1 {
              line-height: 2;
              margin-left: 0.5em;
            }
            .sect1 .part-1 .text {
              padding: 0;
            }
            .sect1 .home-img {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              width: 80%;
              height: 75vh;
              margin-bottom: 3rem;
            }
            .sect1 .home-img img {
              width: 100%;
              -webkit-transform: translateX(200px);
              transform: translateX(200px);
            }
            .tender-list {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              -webkit-box-orient: vertical;
              -webkit-box-direction: normal;
              -ms-flex-direction: column;
              flex-direction: column;
              font-size: 1.1rem;
              width: 100%;
              height: 50vh;
              overflow: hidden;
            }
            .tender-list .headers {
              padding: 25px 0;
              height: 10%;
              width: 100%;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .tender-list .headers .header:nth-child(1) {
              margin-left: 2em;
            }
            .tender-list .headers .header:nth-child(2) {
              margin-left: 7.5em;
            }
            .tender-list .headers .header:nth-child(3) {
              margin-left: 7em;
              margin-right: 1em;
            }
            .tender-list .tender-part {
              width: 100%;
              height: 90%;
              overflow-y: scroll;
            }
            .tender-list .tender-part a {
              color: black;
              text-decoration: underline;
            }
            .tender-list .tender-part .tender-content {
              width: 100%;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -ms-flex-pack: distribute;
              justify-content: space-around;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
            .tender-list .tender-part .tender-content li {
              margin-top: 1.5em;
              text-align: center;
            }
            .tender-list .tender-part .tender-content li:nth-child(2) {
              margin-left: 1em;
            }
            .sec34 {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
            }
          }




         `
        }
    </style>
    <div>
      <section className="sect1">
          <div className="part-1">
            <div className="text">
              <div className="title-flex">
                <h1 className="heading1">Welcome to</h1>
                {/* <h1 class="heading">to</h1> */}
              </div>
              <h1 className="heading2">Acceptender</h1>
            </div>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum vero,
              asperiores ad modi labore nobis nisi amet rerum deserunt dolor aut
              facere repellendus deleniti at ipsam explicabo sapiente? Harum, qui
              exercitationem veritatis, omnis officia sequi
            </p>
            <div className="button flex-center">
              <a href="#Tender-Status" className="btn">Start</a>
            </div>
          </div>
          <div className="part-2">
            <div className="home-img">
              {/* <img src="./images/Home4.png" alt="" /> */}
              <img src="/img/images/Home5.jpeg" alt="Boy with a certificate" />
            </div>
          </div>
        </section>
        <section className="sect2 flex-center" id="Tender-Status">
          <article className="art-1 grid1">
            <div className="image">
              <img className="icon" src="./images/tick2.png" alt="" />
            </div>
            <p className="number">33736</p>
            <p className="status-title">Active Tenders</p>
          </article>
          <article className="art-2 grid1">
            <div className="image">
              <img className="icon" src="./images/clock1.png" alt="" />
            </div>
            <p className="number">363</p>
            <p className="status-title">Tenders Opening Today</p>
          </article>
          <article className="art-3 grid1">
            <div className="image">
              <img className="icon" src="./images/calender1.png" alt="" />
            </div>
            <p className="number">136</p>
            <p className="status-title">Tenders Closing Today</p>
          </article>
          <article className="art-4 grid1">
            <div className="image">
              <img className="icon" src="./images/building1.png" alt="" />
            </div>
            <p className="number">180</p>
            <p className="status-title">No. of Organisations</p>
          </article>
        </section>
        <div className="sec34">
          <section className="sect3">
            <p>Filters:</p>
            <ul className="filters">
              <li className="filter-items">by organization</li>
              <li className="filter-items">by location</li>
              <li className="filter-items">by classification</li>
              <li className="filter-items">by type</li>
              <li className="filter-items">by something</li>
            </ul>
          </section>
          <section className="sect4 flex-center">
            <div className="list-head">
              <h2 id="Tenders">Tenders:</h2>
              <input className="search" placeholder="Search tenders" type="text" />
            </div>
            <div className="tender-list">
              <div className="headers">
                <div className="header">
                  <a className="tender-header" href="#">Tender</a>
                  <a className="tender-header" href="#">Title</a>
                </div>
                <div className="header">
                  <a className="tender-header" href="#">Reference</a>
                  <a className="tender-header" href="#">no</a>
                </div>
                <div className="header">
                  <a className="tender-header" href="#">Opening</a>
                  <a className="tender-header" href="#">Date</a>
                </div>
                <div className="header">
                  <a className="tender-header" href="#">Closing</a>
                  <a className="tender-header" href="#">Date</a>
                </div>
              </div>
              <article className="tender-part">
                <div className="tender-content first">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
                <div className="tender-content">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
                <div className="tender-content">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
                <div className="tender-content">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
                <div className="tender-content">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
                <div className="tender-content">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
                <div className="tender-content">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
                <div className="tender-content">
                  <li>hehehehehe</li>
                  <li>Proc.3(1)/DMK/RABI/HTA/04/2022</li>
                  <li>21-03-2022</li>
                  <li>21-03-2025</li>
                </div>
              </article>
            </div>
          </section>
          </div>
    </div>
    </>
  )
}

export default Homepage_content

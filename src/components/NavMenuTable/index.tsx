import React, { useEffect, useState } from 'react'
import { MenuNav } from './styles'
import SeeMore from '../../../public/icons/seeMore.svg'
import Download from '../../../public/icons/download.svg'
import TableModal from '../TableModal'
import {downloadDashboard} from "./LookerDownload/index"

type PropNavTable = {
  propNav: any
  name: any
  subname: any
  idTable: any
}

const NavMenuTable = ({ propNav, name, subname, idTable }: PropNavTable) => {
  const [isOpen, setIsOpen] = useState(false)

  const modal = document.getElementById('modal')
  window.onclick = function (event) {
    if (event.target === modal) {
      setIsOpen(false)
    }
  }

  console.log(isOpen)

  const handleRef = () => {
    setIsOpen(true)
  }

/*  const handlerdownloadDashboard = async ()  => {
  window.addEventListener("message", function(event) {
    if (event.source === document.getElementById("looker")) {
      if (event.origin === "https://latamdev.cloud.looker.com") {
        const pdfLooker = {
          type: "dashboard:download",
          dashboard: {
            id: 24,
            title: "My Dashboard",
            url: "/embed/looks/",
            absoluteUrl: "https://latamdev.cloud.looker.com/looks/",
          },
          fileFormat: "pdf",
        }

        try  {
         const url =  fetch(pdfLooker.dashboard.absoluteUrl)
          console.log(url)
        } catch (error) {
          console.log(error)
        }
      }
    }
  });
 } */

  return (
    <>
      {isOpen && (
        <TableModal
          name={name}
          subName={subname}
          idTable={idTable}
          onClose={() => setIsOpen(false)}
        />
      )}

      <MenuNav>
        <li>
          <a onClick={handleRef}>
            <span>
              <img src={SeeMore} alt="see more" />
            </span>
            Ver más
          </a>
        </li>
        <li>
          <a  /* onClick={handlerdownloadDashboard} */  >
            <span>
              <img src={Download} alt="download" />
            </span>
            Descargar
          </a>
        </li>
      </MenuNav>
    </>
  )
}

export default NavMenuTable

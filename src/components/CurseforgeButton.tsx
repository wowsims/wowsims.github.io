import { ADDON_LINK } from "../config"
import CurseforgeInstallImg from '../assets/img/curseforge_install.png'

export const ADDON_LINK_TEXT = "Download the WoWSims Exporter addon"

interface Props {
    className?: string
}
function CurseforgeButton({className}: Props) {
    return (
        <a href={ADDON_LINK} target="_blank" className={`curseforge-btn ${className}`} title={ADDON_LINK_TEXT} >
            <img src={CurseforgeInstallImg} alt="Addon Image" />
        </a>
    )
  }
  
  export default CurseforgeButton

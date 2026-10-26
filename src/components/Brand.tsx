import WoWSimsLogo from '../assets/img/WoW-Simulator-Icon.png';

interface Props {
    className?: string
}

// The WoWSims logo and name, linking to the homepage
function Brand({ className }: Props) {
    return (
        <a href="/" className={['wowsims-brand d-flex align-items-center p-0 m-0 gap-2', className].filter(Boolean).join(' ')}>
            <img className="wowsims-logo" src={WoWSimsLogo} alt="WoWSims Logo" />
            <span className="wowsims-title">
                WoWSims
                <small className="wowsims-subtitle">World of Warcraft Simulations</small>
            </span>
        </a>
    )
}

export default Brand

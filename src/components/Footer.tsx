function Footer() {
    return (
        <footer className="homepage-footer">
            <div className="page-container">
                <span>© 2021-{new Date().getFullYear()} WoWSims team</span>
                <span className="homepage-footer-sep">·</span>
                <span>A fan-made project, not affiliated with Blizzard Entertainment.</span>
            </div>
        </footer>
    )
}

export default Footer

import Hamburger from "hamburger-react"
import { useState } from "react"
import './HumburgerComponent.scss'

function HamburgerComponent() {
    const [open, setOpen] = useState(false)

    return (
        <>

            <Hamburger
                color="#1e3a8a"
                direction="right"
                toggled={open}
                toggle={setOpen}
                rounded
                hideOutline={false}
            />
            {open && <div className="hamburger__nav">menu</div>

            }

        </>
    )
}

export default HamburgerComponent
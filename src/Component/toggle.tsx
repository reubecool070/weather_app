import React, { useState } from 'react'
import classnames from 'classnames'
import '../assets/css/toogle.css'

interface PropsI {
    // onClick: () => void
    onStateChanged: () => void
    theme: string
    value: boolean
    className: string
}

function ToggleSwitch(props: PropsI) {
    const { onStateChanged, theme, className, value } = props
    const [enabled, setEnabled] = useState(value)

    const toogleSwitch = (evt: React.SyntheticEvent<EventTarget>) => {
        evt.persist()
        evt.preventDefault()
        setEnabled(!enabled)

        onStateChanged()
    }

    const switchTheme = theme && typeof theme === 'string' ? theme : 'default'

    const switchClasses = classnames(`switch switch--${switchTheme}`, className)

    const togglerClasses = classnames(
        'switch-toggle',
        `switch-toggle--${enabled ? 'on' : 'off'}`
    )

    return (
        <div
            className={switchClasses}
            onClick={toogleSwitch}
            role="presentation"
        >
            <div className={togglerClasses} />
        </div>
    )
}

export default ToggleSwitch

import React, { useState } from 'react'
import classnames from 'classnames'
import '../assets/css/toogle.css'

interface PropsI {
    // onClick: () => void
    onStateChanged: (key: boolean) => void
    theme: string
    value: boolean
    className: string
}

function ToggleSwitch(props: PropsI) {
    const { onStateChanged, theme, className, value } = props
    const [enabled, setEnabled] = useState(value)

    const toogleSwitch = (evt: any) => {
        evt.persist()
        evt.preventDefault()
        setEnabled(!enabled)

        const switchEvent = Object.assign(evt, { SWITCH_STATE: enabled })
        // Execute the callback functions
        // onClick(switchEvent)
        onStateChanged(enabled)
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

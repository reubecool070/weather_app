import React from 'react'
import AsyncSelect from 'react-select/async'
import Select from 'react-select'
import { AsyncPropsI, SelectPropsI } from '../types'

export const smallSelectStyle = {
    control: (base: any) => ({
        ...base,
        minHeight: 30,
        borderColor: '#BFCCDA',
        borderRadius: '3px',
        boxShadow: 'none',
        // backgroundColor: 'transparent',
        '&:hover': {
            borderColor: '#fff',
            boxShadow: 'none',
            color: '#fff',
            // backgroundColor: '#fff',
        },
        '&:focus': {
            border: '1px solid var(--color-primary)',
            paddingTop: '6.5px',
            paddingBottom: '6.5px',
            boxShadow: 'none',
        },
        '&:active': {
            border: '1px solid var(--color-primary)',
            boxShadow: 'none',
        },
        '&::placeholder': {
            color: '#fff',
        },
    }),
    menu: (base: any) => ({
        ...base,
        innerHeight: 30,
        zIndex: 2,
    }),
    menuList: (base: any) => ({
        ...base,
    }),
    indicatorsContainer: (provided: any) => ({
        ...provided,
        height: 30,
        color: '#394E66',
    }),
    indicatorSeparator: (base: any) => ({
        ...base,
        margin: '0',
        backgroundColor: '#BFCCDA',
    }),
}

export function CustomAsyncSelect(props: AsyncPropsI) {
    const { options, onChange, placeholder } = props
    return (
        <AsyncSelect
            styles={smallSelectStyle}
            cacheOptions
            loadOptions={options}
            name="options"
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export function CustomSelect(props: SelectPropsI) {
    const { onChange, options, value } = props

    return (
        <Select
            onChange={onChange}
            value={value}
            styles={smallSelectStyle}
            options={options}
        />
    )
}

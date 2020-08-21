export const options = [
    { value: 'Минимальная', label: 'Минимальная' },
    { value: 'Низкая', label: 'Низкая' },
    { value: 'Средняя', label: 'Средняя' },
    { value: 'Высокая', label: 'Высокая' },
    { value: 'Очень высокая', label: 'Очень высокая' },
]


export const customStyles = {
    valueContainer: () => ({
        padding: 0,
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    input: () => ({
        display: 'none',
    }),
    option: (provided, state) => ({
        color: state.isSelected ? '#27AE60' : '#1C1C1E',
        padding: 18,
        zIndex: 8,

        '&:hover': {
            color: 'rgba(100, 100, 100, .8);',
            transaction: '.3s'
        }
    }),
    placeholder: () => ({
        color: '#fff',
        padding: 0,
        margin: 0
    }),
    control: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#fff',
    }),
    container: base => ({
        zIndex: 7,
        ...base,

        '&:hover': {
            opacity: 1
        }
    }),
    singleValue: () => ({
        color: '#fff',
    }),

}

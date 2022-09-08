import PropTypes from 'prop-types';

export const App = ({title, subtitle, name}) => {
    return (
        <>
        <h1>{title} :3</h1>
        <p>{subtitle}</p>
        <p> {name} </p>
        </>
)}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

App.defaultProps = {
    title: 'Default title',
    subtitle: 123,
    name: 'Yulianny'
}
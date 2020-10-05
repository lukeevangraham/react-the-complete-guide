import React from 'react';

const UserOutput = (props) => {
    const styles = {
        margin: '20px auto',
        padding: '1rem',
        backgroundColor: 'white',
        width: "45%",
        boxShadow: '0px 0px 3px'
    }
    return (
        <div style={styles}>
            <p>Paragraph One from {props.userName}</p>
            <p>Paragraph Two</p>
        </div>
    )
}

export default UserOutput
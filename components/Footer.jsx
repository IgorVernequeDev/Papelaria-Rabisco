import React from 'react';

export default function footer(props) {
    return (
        <footer className='mt-5' style={{
            backgroundColor: props.bgcolor
        }}>
            <div className='d-flex w-100 p-5'>
                <div className="w-100 d-flex justify-content-center align-items-center">
                &copy; {new Date().getFullYear()} Papelaria Rabisco. Todos os direitos reservados.</div>
            </div>
        </footer>
    );
};
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef()
    const passowrdRef = useRef()





    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    // this will check on every render that if password present in localstorage then do this 
    useEffect(() => {
        let passwords = localStorage.getItem('passwords')
        if (passwords) {
            // let passwordArray;
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])

    const copyText = (text) => {
        toast('🦄 Copied to clipboard', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        passowrdRef.current.type = 'text'
        console.log(ref.current.src)

        // alert('show password')
        if (ref.current.src.includes('eyecros.png')) {
            ref.current.src = 'eye.png '
            passowrdRef.current.type = 'password'
            ref.current.style.width = '26px';
        }
        else {
            passowrdRef.current.type = 'text'
            ref.current.src = 'eyecros.png'
            ref.current.style.width = '40px';
        }
    }


    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            console.log(form);
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])    //this will add a new password
            localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            console.log([...passwordArray, form]);
            setform({ site: "", username: "", password: "" })
        }
        else {
            toast('🦄Enter a valid password', {
                autoClose: 1500,
            });
        }
    }
    const deletePassword = (id) => {
        console.log('Deleting password with id', id)
        let c = confirm('Do you want to delete')
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem('passwords', JSON.stringify(passwordArray.filter(item => item.id !== id)))
            // console.log([...passwordArray, form]);
        }
    }



    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />


            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
            </div>

            <div className="p-2 md:p-0 md:mycontainer min-h-[88.5vh]">
                <h1 className='text-2xl  font-extrabold text-center'>
                    <span className='text-purple-700'>&lt;</span>
                    <span>Pass</span><span className='text-purple-700'>OP/&gt;</span>
                </h1>

                <p className='text-purple-700 font-serif font-bold text-center text-lg'>Your own password manager</p>


                <div className='text-black flex flex-col p-4 gap-8 items-center'>
                    {/* Input-1 */}
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-purple-600 w-full text-black p-4 py-1' type="text" name='site' id='site' />


                    <div className="flex flex-col w-full md:flex-row justify-between gap-8">
                        {/* Input-2 */}
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-purple-500 w-full p-4 py-1 ' type="text" name='username' id='username' />


                        <div className="relative w-full">
                            {/* Input-3 */}
                            <input ref={passowrdRef} type='password' value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border border-purple-500 w-full p-4 py-1 ' name='password' id='password' />

                            <span className='absolute right-2 top-2  cursor-pointer' onClick={showPassword}>
                                {/* <lord-icon
                                    src="https://cdn.lordicon.com/kkiecexg.json"
                                    trigger="hover" 
                                    colors="primary:#d1e3fa,secondary:#ee66aa">

                                </lord-icon> */}
                                <img ref={ref} className='p-1' width={26} src="eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-purple-400 font-semibold font-serif hover:bg-purple-500 rounded-full px-4 py-2 w-fit border-2 border-purple-700'>
                        {/* <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon> */}
                        <lord-icon
                            src="https://cdn.lordicon.com/pdsourfn.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#c69cf4,tertiary:#ebe6ef">
                        </lord-icon>
                        Save Passwords</button>
                </div>

                <div className="passwords">
                    <h1 className='font-bold text-xl py-4 p-2'>Your Passwords</h1>
                    {passwordArray.length === 0 && <div>Add Your Passwords</div>}
                    {passwordArray.length != 0 &&
                        <table className=" w-[100%] text-[10px] sm:text-[16px] mb-2">
                            <thead className='bg-purple-800 text-white'>
                                <tr>
                                    <th class="px-4 py-2">Site</th>
                                    <th class="px-4 py-2">Username</th>
                                    <th class="px-4 py-2">Passwords</th>
                                    <th class="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-purple-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className="text-center border border-black gap-6">
                                            <div className='flex  justify-center items-center gap-9 border'>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='size-5 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                    <img src="copy.png" alt="copy" width={20} />
                                                </div>
                                            </div>
                                        </td>


                                        <td className="  text-center  py-2 border border-black ">
                                            <div className='flex  justify-center items-center gap-9 border'>
                                                <span>{item.username}</span>
                                                <div className='size-5 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                    <img src="copy.png" alt="copy" width={20} />
                                                </div>
                                            </div>
                                        </td>



                                        <td className=" text-center  py-2 border border-black  ">
                                            <div className='flex  justify-center items-center gap-9 border'>
                                                <span>{item.password}</span>
                                                <div className='size-5 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                    <img src="copy.png" alt="copy" width={20} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' justify-center py-2 border border-black text-center cursor-pointer '>
                                            <span  onClick={() => deletePassword(item.id)}>Delete
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    trigger='loop'
                                                    colors="primary:#121331,secondary:#c69cf4 ">

                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager

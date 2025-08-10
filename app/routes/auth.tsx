import React, { use, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { usePuterStore } from '~/lib/puter'


export const meta = () => ([
    { title: "ResumeAnalyzer | Authentication" },
    { name: "description", content: "Log into your Account" },
])

const auth = () => {

    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            // Redirect to dashboard or perform any other action
            navigate(next);
        }
    }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-[url('./image/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className='gradient-border shadow-lg'>
            <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                <div className='flex flex-col items-center gap-2 text-center'>
                    <h1>Wellcome</h1>
                    <h2>Log in to Continue Your Job Journey</h2>
                </div>

                <div>
                    {
                        isLoading ? (
                            <button className='auth-button animate-pulse'>
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                                {
                                    auth.isAuthenticated ? (
                                        <button className='auth-button' onClick={auth.signOut}>
                                            <p>Log Out</p>
                                        </button>
                                    ) : (
                                         <button className='auth-button' onClick={auth.signIn}>
                                            <p>Log In</p>
                                        </button>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </section>
        </div>
    </main>
  )
}

export default auth
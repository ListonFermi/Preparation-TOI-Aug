import React, { createContext } from 'react'
import Child1 from './Child1'
import WithLogger from './WithLogger'
import { ErrorBoundary } from 'react-error-boundary';

const LazyLoadedComponent = React.lazy(() => import('./LazyLoadedComponent'));

export const NumContext = createContext(10)

function FallbackComponent({ error }) {
    return <div>An error occurred: {error.message}</div>;
}

function BuggyComponent() {
    throw new Error('Oops! Something went wrong.');
}


function ParentComp() {
    return (
        <>
            <ErrorBoundary fallbackRender={FallbackComponent}>
            <LazyLoadedComponent />
                <BuggyComponent />
            <NumContext.Provider value={10} >

                <div>
                    <Child1 />
                </div>
            </NumContext.Provider>
            </ErrorBoundary>
        </>
    )
}

export default WithLogger(ParentComp)

import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={"learning, next js" + keywords}/>
                <title>{title ? title : "Home"}</title>
            </Head>
            <div className="navbar">
                <A href={'/'} text="Home"/>
                <A href={'/users'} text="Users"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: #d7b1b7;
                    padding: 15px;
                  }

                `}
            </style>
        </>
    );
};

export default MainContainer;
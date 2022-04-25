import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer title={"Users"}>
            <div>
                <h1>Users Page</h1>
                <div>
                    {users.map(user => {
                        return <div key={user.id}>
                            <A href={`/users/${user.id}`} text={user.name}/>
                        </div>
                    })}
                </div>
            </div>
        </MainContainer>
    );
};

export default Users;
export async function getStaticProps(context) {
    console.log(context)
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}
import { User } from "./User";

export const AllUsers = (props) => {
    const {users} = props;

    
    const renderList = users.map((user)=>{
        const { id, username  } = user; 
        return (
            <User username={username} key={id} />
        )
    });

        

    
    return (
        <>
            <div class="users-content"> 
                {renderList}
            </div>
        </>
    )
    
}
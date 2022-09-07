
const PostLists = ({ myposts ,deletaction }) => {
    return (
        <> 
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                        </tr>
                    </thead>
                    <tbody>
                        { myposts.map((post) => (
                            <tr key={post.id}>
                                <th scope="row">{post.id}</th>
                                <td>{post.title}</td>
                                <td> {post.body}</td>
                                {/* <td> <button type="button" onClick={() => deletaction(post.id)} className="btn btn-danger" >Delete </button></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default PostLists;
import {Link} from "react-router-dom";

type Comment = {
    id : string | number,
    user : {
        name : string,
        image : string
    }
    content : string,
    date : string,
    context : string
}

function Comments(){

    const comments : Array<Comment> = [
        {
            id : 1 , content : 'Great work! When HTML version will be available? ⚡' , context : 'Bento Pro 2.0' , date : '09:00 AM',
            user : { name : 'Joyce' , image : 'avatar-5.jpg' }
        },
        {
            id : 2 , content : 'Amazing. This says compatible with After Effects. Will After Effects files be added?' , context : 'Food Delivery App' , date : '09:00 AM',
            user : { name : 'Gladyce' , image : 'avatar-6.png' }
        },
        {
            id : 3 , content : 'Hello, can we get the 3d source code of the characters?' , context : 'Food Delivery App' , date : '09:00 AM',
            user : { name : 'Elbert' , image : 'avatar-7.png' }
        },
    ];

    return(
        <section className="w-full flex flex-col gap-5 bg-white dark:bg-surface-2 p-6 md:px-8 rounded-4xl">
            <header>
                <h2 className="text-[20px] font-semibold dark:text-white px-3">Comments</h2>
            </header>
            <ul className="w-full flex flex-col gap-1">
                { comments.map( comment => (
                    <li key={`comment-${comment.id}`} className="py-5 px-3 rounded-[20px] hover">
                        <article className="w-full flex gap-5">
                            <figure>
                                <img src={`avatars/${comment.user.image}`} alt={comment.user.name} loading="lazy" className="min-w-11 min-h-11 max-w-11 max-h-11 rounded-full"/>
                                <figcaption className="sr-only">{comment.user.name}</figcaption>
                            </figure>
                            <section className="w-full flex flex-col gap-5">
                                <header className="flex flex-col gap-1">
                                    <h3 className="font-semibold dark:text-white">
                                        {comment.user.name}
                                        <span className="text-teritary mx-1">on</span>
                                        {comment.context}
                                    </h3>
                                    <p className="text-xs text-teritary">{comment.date}</p>
                                </header>
                                <p className="text-sm dark:text-white">{comment.content}</p>
                            </section>

                        </article>
                    </li>
                ) ) }
            </ul>

            <Link to="#" className="border border-[rgba(226,226,226,1)] dark:border-[rgba(40,40,40,1)] rounded-4xl py-4 text-sm text-center font-semibold text-teritary my-1">All comments</Link>
        </section>
    )

}
export default Comments;
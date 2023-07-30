import { getPostData } from "@/lib/posts"

export default async function education() {
    const postData = await getPostData('hobbies');
    const htmlData = postData['contentHtml'];
    return (
        <div dangerouslySetInnerHTML={{__html: htmlData}}></div>
    )
}

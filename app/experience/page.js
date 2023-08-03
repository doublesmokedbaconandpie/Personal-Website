import { getPostData } from "@/lib/posts"

export default async function experience() {
    const postData = await getPostData('experience');
    const htmlData = postData['contentHtml'];
    return (
        <div id='articleContent' dangerouslySetInnerHTML={{__html: htmlData}}></div>
    )
}

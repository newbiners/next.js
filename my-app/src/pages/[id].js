import { useRouter } from "next/router";
import { useState } from "react";

export default function HomeDetail() {
    const router = useRouter();
    const [pos, setPos] = useState('')
    console.log(router.query.id);
    let abb = router.query.id;
    let { id } = router.query;
    setPos(abb)
    // let add =  id.replace(/ /g, "+")
    // let abb = id.replace(/ /g, "+");
    return(
        <main>
            masukan id  {pos}
        </main>
    )
}
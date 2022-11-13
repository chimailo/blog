import Image from "next/image";
import myphoto from "../public/assets/blog/hello-world/cover.jpg"

export default function About() {
    return (
        <section className="relative grid grid-cols-12">
            <div className="col-span-full md:col-span-4 lg:col-span-4">
                <Image src={myphoto} alt="photo of Chima Ilo" />
            </div>
            <div className="col-span-full mt-12 md:col-start-6 lg:col-span-6 lg:col-start-6 md:mt-0 text-main dark:text-slate-100 text-lg">
                <p className="mb-4">I am a software engineer that enjoys building on the web. My interest for web develoment started when I tried to help a friend of my create a wordpress website in 2019. I ended up creating a new theme to satisfy all our requirements. Since then, I have made steady progress that has led me into the tech industry.</p>
                <p className="mb-4">As a self taught developer, my path has led me to volunteer at a student-led organization and contribute to open source software, as well as build several personal projects. Through these experiences, I have had the opportunity to work with senior developers and designers to build memorable products that raise my standards for whats expected of any web appllication.</p>
                <p className="mb-4">Currently, I work at Youverify where I am focused on building accessible digital experiences and internal development tools.</p>
                <p className="mb-4">Here are a few a of the tools I work with:</p>
                <ul className="grid grid-cols-2 gap-4 list-disc ml-4">
                    {['Javascript (ES6+)', 'Typescript', 'HTML5 & CSS3', 'React js', 'Node js', 'Vue js'].map((item, i) => (<li key={i} className="col-span-1">{item}</li>))}
                </ul>
            </div>
        </section>
    )
}



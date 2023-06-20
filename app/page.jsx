import Feed from "@components/Feed"



const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai-powered prompts</span>
        </h1>
        <p className="desc text-center" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum enim illum ab animi voluptate. A delectus incidunt fuga impedit porro, sit vitae optio nisi labore at eos voluptatibus animi modi! </p>
        <Feed />
        
    </section>
  )
}

export default Home
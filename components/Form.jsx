import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">
          {type} Post
        </span>
      </h1>
      <p className="desc text-left-max-w-md">
        {type} contents here
      </p>

      <form 
      onSubmit={handleSubmit}
      className="mt-10 w-full max-w-full flex-col flex gap-7 glassmorphism"
      >
        <label htmlFor="promptTextarea">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI prompt
          </span>
          <textarea 
          value={post.prompt} 
          onChange={(e) => setPost({...post, prompt: e.target.value })} 
          name="" 
          id="promptTextarea"  
          className="form_textarea" 
          placeholder="Write your AI prompt here..."
          />
        </label>
        <label htmlFor="promptTextarea">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag 
            <span className="font-normal">
              (#product, #idea, etc)
            </span>
          </span>
          <input 
          value={post.tag} 
          onChange={(e) => setPost({...post, tag: e.target.value })} 
          name="" 
          id="promptInput"  
          className="form_input" 
          placeholder="#tag"
          required
          />
        </label>
        <div className="flex-end mx-3 gap-4">
          <Link href='/' className="text-gray-500 text-sm" >
            Cancel
          </Link>
          <button 
            type="submit"
            disabled={submitting}
            className="bg-primary-orange rounded-full text-white px-5 py-1.5"
          >
            {submitting? `${type}...` : type }
          </button>
        </div>
      </form>


    </section>
  )
}

export default Form
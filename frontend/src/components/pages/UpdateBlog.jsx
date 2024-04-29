import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Context } from "../../main";

const UpdateBlog = () => {
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [intro, setIntro] = useState("");
  const [paraOneTitle, setParaOneTitle] = useState("");
  const [paraTwoTitle, setParaTwoTitle] = useState("");
  const [paraThreeTitle, setParaThreeTitle] = useState("");
  const [paraOneImage, setParaOneImage] = useState("");
  const [paraTwoImage, setParaTwoImage] = useState("");
  const [paraThreeImage, setParaThreeImage] = useState("");
  const [paraOneImagePreview, setParaOneImagePreview] = useState("");
  const [paraTwoImagePreview, setParaTwoImagePreview] = useState("");
  const [paraThreeImagePreview, setParaThreeImagePreview] = useState("");
  const [paraOneDescription, setParaOneDescription] = useState("");
  const [paraTwoDescription, setParaTwoDescription] = useState("");
  const [paraThreeDescription, setParaThreeDescription] = useState("");
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState(true);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/blog/singleBlog/${id}`,
          { withCredentials: true }
        );
        setTitle(data.blog.title);
        setIntro(data.blog.intro);
        setCategory(data.blog.category);
        setMainImage(data.blog.mainImage.url);
        setParaOneTitle(data.blog.paraOneTitle);
        setParaTwoTitle(data.blog.paraTwoTitle);
        setParaThreeTitle(data.blog.paraThreeTitle);
        setParaOneDescription(data.blog.paraOneDescription);
        setParaTwoDescription(data.blog.paraTwoDescription);
        setParaThreeDescription(data.blog.paraThreeDescription);
        data.blog.paraOneImage && setParaOneImage(data.blog.paraOneImage.url);
        data.blog.paraTwoImage && setParaTwoImage(data.blog.paraTwoImage);
        data.blog.paraThreeImage && setParaThreeImage(data.blog.paraThreeImage);
        setPublished(data.blog.published);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append("title", title);
    updatedData.append("category", category);
    updatedData.append("intro", intro);
    updatedData.append("published", published);
    updatedData.append("mainImage", mainImage);
    if (paraOneTitle) {
      updatedData.append("paraOneTitle", paraOneTitle);
    }
    if (paraOneDescription.length > 0) {
      updatedData.append("paraOneDescription", paraOneDescription);
    }
    if (paraOneImage) {
      updatedData.append("paraOneImage", paraOneImage);
    }
    if (paraTwoTitle) {
      updatedData.append("paraTwoTitle", paraTwoTitle);
    }
    if (paraTwoDescription.length > 0) {
      updatedData.append("paraTwoDescription", paraTwoDescription);
    }
    if (paraTwoImage) {
      updatedData.append("paraTwoImage", paraTwoImage);
    }
    if (paraThreeTitle) {
      updatedData.append("paraThreeTitle", paraThreeTitle);
    }
    if (paraThreeDescription.length > 0) {
      updatedData.append("paraThreeDescription", paraThreeDescription);
    }
    if (paraThreeImage) {
      updatedData.append("paraThreeImage", paraThreeImage);
    }

    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/blog/update/${id}`,
        updatedData,
        { withCredentials: true }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const mainImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setMainImagePreview(reader.result);
      setMainImage(file);
    };
  };

  const paraOneImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaOneImagePreview(reader.result);
      setParaOneImage(file);
    };
  };

  const paraTwoImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaTwoImagePreview(reader.result);
      setParaTwoImage(file);
    };
  };

  const paraThreeImagePreviewHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setParaThreeImagePreview(reader.result);
      setParaThreeImage(file);
    };
  };

  const { mode } = useContext(Context);

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className='update-blog'>
        <h3>UPDATE BLOG</h3>
        <form>
          <div className="category-box">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Blog Category</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Technology">Technology</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="Travel">Travel</option>
              <option value="Sports">Sports</option>
            </select>
          </div>

          <input
            type="text"
            placeholder='Blog main title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column"
            }}>
            <label>Blog Main Image</label>
            <img src={mainImagePreview ? `${mainImagePreview}` : mainImage ? `${mainImage}` : "/imgPL.webp"} alt="mainImage" className='mainImg' />
            <input
              type="file"
              onChange={mainImagePreviewHandler}
              style={{ border: "none" }} />
          </div>

          <textarea
            rows={25}
            className='intro'
            placeholder='Blog Intro...'
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
          <div className="sub-para">
            <input
              type="text"
              placeholder='Paragraph One Title'
              value={paraOneTitle}
              onChange={(e) => setParaOneTitle(e.target.value)}
            />
            <img
              src={paraOneImagePreview ? `${paraOneImagePreview}` : paraOneImage ? `${paraOneImage}` : "/imgPL.webp"}
              alt="paraImage"
            />
            <input
              type="file"
              onChange={paraOneImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows={10}
              placeholder='Blog first paragraph comes here..'
              value={paraOneDescription}
              onChange={(e) => setParaOneDescription(e.target.value)}
            />
          </div>

          <div className="sub-para">
            <input
              type="text"
              placeholder='Paragraph Two Title'
              value={paraTwoTitle}
              onChange={(e) => setParaTwoTitle(e.target.value)}
            />
            <img
              src={paraTwoImagePreview ? `${paraTwoImagePreview}` : paraTwoImage ? `${paraTwoImage}` : "/imgPL.webp"}
              alt="paraImage"
            />
            <input
              type="file"
              onChange={paraTwoImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows={10}
              placeholder='Blog second paragraph comes here..'
              value={paraTwoDescription}
              onChange={(e) => setParaTwoDescription(e.target.value)}
            />
          </div>

          <div className="sub-para">
            <input
              type="text"
              placeholder='Paragraph Three Title'
              value={paraThreeTitle}
              onChange={(e) => setParaThreeTitle(e.target.value)}
            />
            <img
              src={paraThreeImagePreview ? `${paraThreeImagePreview}` : paraThreeImage ? `${paraThreeImage}` : "/imgPL.webp"}
              alt="paraImage"
            />
            <input
              type="file"
              onChange={paraThreeImagePreviewHandler}
              style={{ border: "none" }}
            />
            <textarea
              rows={10}
              placeholder='Blog third paragraph comes here..'
              value={paraThreeDescription}
              onChange={(e) => setParaThreeDescription(e.target.value)}
            />
          </div>

          <div className="publish-box">
            <label>Wants to publish now?</label>
            <select value={published} onChange={(e) => setPublished(e.target.value === "true")}>
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>

          <button onClick={handleUpdate} className='update-btn'>
            UPDATE
          </button>
        </form>
      </section>
    </article>
  )
}

export default UpdateBlog
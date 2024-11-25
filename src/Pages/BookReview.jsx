import React from 'react'

function BookReview() {
  return (
    <div>
        <div className="row mt-4 ms-3">
            <div className="col-2">
                <img src="" alt="book_img" />
            </div>
            <div className="col-5">
                <h5>Book Title</h5>
                <h5>Author</h5>
                <h5>Rating</h5>
                <h5>Genres</h5>
            </div>
        </div>
        <div className="row ms-3 mt-4">
            <h3>About Book</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, exercitationem facilis placeat fugiat optio nemo quaerat necessitatibus obcaecati et explicabo, officia tempore, ratione incidunt. Dignissimos saepe esse ad numquam? Soluta.
            Deleniti iste repudiandae atque esse ab debitis nobis sit. Quas nobis quia ea, maiores vero sit ex tempora blanditiis, esse culpa mollitia voluptates eligendi repudiandae dolore? Ut alias perferendis possimus?
            Cupiditate molestias reprehenderit molestiae ipsa velit reiciendis, ipsum unde, sunt rerum maxime dolor nulla voluptas esse ipsam? Impedit delectus quo cupiditate velit dolorem blanditiis obcaecati minus, incidunt doloremque, eligendi sed!</p>
        </div>
        <div className="row ms-3 mt-3">
            <h3>About Author</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi soluta eius deleniti voluptate debitis doloremque numquam, adipisci nisi accusantium quod cumque minus necessitatibus ut odio expedita? Eligendi deserunt voluptate laboriosam.
            Eveniet voluptatem maxime magni sint in, quia accusamus velit tenetur fugit laudantium ex eaque natus? Reprehenderit unde ipsa eius, impedit expedita eligendi nam vero accusamus laudantium, officiis praesentium quo omnis.
            Aut vero commodi explicabo corrupti! Repellat eius error fugit commodi iusto corrupti fuga unde. Sit, iure praesentium aperiam assumenda dolores ut labore voluptate eligendi placeat magni eum perferendis deserunt. Sed.</p>
        </div>
{/* Review Upload */}
        <h2>Reviews:</h2>
        <div className="row mt-4 ms-3 border me-3 shadow mb-4">
            <div className="col-2 mt-3">
                <img src="" alt="Book_img" />
            </div>
            <div className="col-10 mt-3">
                <h5>Rating:</h5>
                <div className='border mb-3'>
                    <h3>About Book</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem magnam ad tempora praesentium animi ex autem omnis quos iusto cumque qui alias repudiandae, odio maxime perferendis placeat voluptates labore totam!
                    Quasi atque corrupti harum distinctio animi temporibus, est ea libero aliquam minima dolores, dignissimos reprehenderit, corporis sed. Accusantium, nulla et provident exercitationem architecto quidem, sapiente, quam esse aliquam corporis molestiae.
                    Sint, reprehenderit a. Doloremque distinctio quaerat ipsa quia inventore, tenetur esse est iure dolores architecto, voluptate labore accusamus animi suscipit iste hic corporis. Officiis autem consequuntur ipsam placeat, quaerat quam!
                    Natus aliquam nesciunt doloremque dicta pariatur quis earum eum nulla, molestias vero eos veniam corrupti. Tenetur assumenda nostrum possimus. Mollitia iste omnis praesentium fugit eaque perferendis provident facilis, nisi ipsam!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookReview
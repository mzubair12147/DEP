import "./DescriptionBox.css";

export default function DescriptionBox() {
    return (
        <div className="description-box">
            <div className="description-box-navigator">
                <div className="description-box-nav-box">Description</div>

                <div className="description-box-nav-box fade">
                    Reviews (100)
                </div>
            </div>
            <div className="description-box-description">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium odio reiciendis veniam itaque ut ad expedita
                    perspiciatis eaque similique modi maiores earum obcaecati
                    sunt, magnam delectus totam non magni rem. Corrupti,
                    blanditiis? Provident, minus perferendis iste quod
                    voluptates sint nemo tempore maiores quos quibusdam ducimus
                    quae aliquam dolores ab quisquam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium odio reiciendis veniam itaque ut ad expedita
                    perspiciatis eaque similique modi maiores earum obcaecati
                    sunt, magnam delectus totam non magni rem. Corrupti,
                    blanditiis? Provident, minus perferendis iste quod
                    voluptates sint{" "}
                </p>
            </div>
        </div>
    );
}

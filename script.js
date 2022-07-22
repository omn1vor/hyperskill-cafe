const reviewForm = document.getElementById("reviewForm");

function addReview(formData) {
    const rows = document.getElementById("reviewsRow");
    rows.innerHTML += `<div class="col-lg-4 col-md-6 py-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${formData.get("title")}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p class="card-text">${formData.get("text")}</p>
                                    <footer class="card-footer text-end blockquote-footer"><i>${formData.get("author")}</i></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>`;
}

reviewForm.onsubmit = (event) => {
    event.preventDefault();

    let formData = new FormData(reviewForm);
    if (!formData.get("author")) {
        formData.set("author", "Anonymous");
    }
    addReview(formData);
}
class Article extends Validation {
  constructor() {
    super();
    this.toast = new ToastMt();
  }

  deleteArticle() {
    this.toast.MtShow("Article deleted");
  }

  hideArticle() {
    this.toast.MtShow("Article has been hide successfully");
  }

  postArticle() {
    this.toast.MtShow("Article successfully posted");
  }

  editArticle() {
    this.toast.MtShow("Article successfully edited");
  }
}

const MtArticle = new Article();

// Partial -> 프로퍼티를 선택적으로 만드는 타입으로 구성

// Omit -> 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성

// Pick -> 프로퍼티 K의 집합을 선택해 타입을 구성
interface IBook {
  title: string
  author: string
  description: string
}


function updateBookDescription(book: Partial<IBook>) {
  console.log(book);
}


function updateBookTitleAndAuthor(book: Omit<IBook, "description">) {
  console.log(book);
}


function updateTitle(book: Pick<IBook, "title">) {
  console.log(book);
}

updateBookDescription({ description: "new description" });
updateBookTitleAndAuthor({ title: "new title", author: "new author" });
updateTitle({ title: "new title" });
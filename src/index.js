import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ作成
  const li = document.createElement("li");
  li.className = "list-row";

  // spanタグと表示テキスト作成
  const span = document.createElement("span");
  span.innerText = inputText;

  // buttonタグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // liタグの子要素に各要素を入れる
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());

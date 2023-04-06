import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加
const createIncompleteList = (text) => {
  // liタグ作成
  const li = document.createElement("li");
  li.className = "list-row";

  // spanタグと表示テキスト作成
  const span = document.createElement("span");
  span.innerText = text;

  // buttonタグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから親タグ（li）を削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    // spanタグと表示テキスト作成
    const span = document.createElement("span");
    span.innerText = text;
    // buttonタグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // liタグの子要素に各要素を入れる
    addTarget.appendChild(span);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
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

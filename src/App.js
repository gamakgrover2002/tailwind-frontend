function App() {
  document.body.style.backgroundColor = "#ff608c";
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY || window.pageYOffset;
    console.log(scroll);
    if (scroll < 400) {
      document.body.style.backgroundColor = "#ff608c";
      document.body.style.color = "white";
    } else if (scroll > 400 && scroll < 1200) {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "black";
    } else if (scroll > 1200 && scroll < 1700) {
      document.body.style.backgroundColor = "#00c1b5";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "#ff6519";
    }
  });

  return (
    <div>
      <img
        class="w-96 h-16 px-5 py-5"
        src="https://backstagetalks.com/img/logo.png"
        alt="logo"
      ></img>

      <center class="my-48">
        <img
          class="h-96 w-2/5 "
          src="https://backstagetalks.com/img/backstagetalks_cover_issue_7.png"
          alt="Backstage talks Issue 7"
        ></img>
        <h3 class="font-bold">Issue #7</h3>
        <h4 class="buy font-bold  hover:cursor-pointer hover:underline">
          BUY HERE
        </h4>
      </center>
      <center class="my-48">
        <img
          class="h-96 w-2/5 "
          src="https://backstagetalks.com/img/backstagetalks_cover_issue_6.png"
          alt="Backstage talks Issue 7"
        ></img>
        <h3 class="font-bold">Issue #6</h3>
        <h4 class="font-bold  hover:cursor-pointer hover:underline">
          BUY HERE
        </h4>
      </center>
      <center class="my-48">
        <img
          class="h-96 w-2/5"
          src="https://backstagetalks.com/img/backstagetalks_cover_issue_5.png"
          alt="Backstage talks Issue 7"
        ></img>
        <h3 class="font-bold">Issue #5</h3>
        <h4 class="font-bold  hover:cursor-pointer hover:underline">
          BUY HERE
        </h4>
      </center>
      <center class="my-48">
        <img
          class="h-96 w-2/5"
          src="https://backstagetalks.com/img/backstagetalks_cover_issue_4.png"
          alt="Backstage talks Issue 7"
        ></img>
        <h3 class="font-bold">Issue #5</h3>
        <h4 class="font-bold  hover:cursor-pointer hover:underline">
          BUY HERE
        </h4>
      </center>
      <div className="font-bold w-3/12 px-6">
        Backstage Talks is a magazine of casual, but in depth dialogues on
        design and business. Our decisions shape and influence this complex
        world—to have a chance to make the right ones, we need to talk.
      </div>
      <p className="font-extralight text-sm py-4 px-6 text-grey-100">
        @by Gamak Grover
      </p>
      <p className="text-right text-xl">
        <a href="https://github.com/gamakgrover2002">
          @https://github.com/gamakgrover2002
        </a>
      </p>
    </div>
  );
}

export default App;

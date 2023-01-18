import { useEffect, useState } from "react";
import { fetchImages } from "./api";
function Header() {
  var str;  //入力文字を入れる変数
  //インプットボックスの表示＆入力文字をstrに代入
  str = prompt("名前を教えて下さい。","");
  //strが空の場合の処理
  if (str == "") str = "X";
    return (
      <header className="hero is-warning is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-weight-bold">こんにちは！ {str} さん</h1>
            <p className="has-text-white">リロードすると名前を変更できます</p>
          </div>
        </div>
      </header>
    );
}
  
  function Image(props) {
    const {urls} = props;
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
          <img src={props.urls} alt="cute cat!" />
          </figure>
        </div>
      </div>
    );
  }
 // function Loading() {
 //   return <p>Loading...</p>;
 // }
  
//    function Gallery(props) {
//      const { urls } = props;
//      if (urls == null) {
//          return <Loading />;
//      }
//      return (
//        <div className="columns is-vcentered is-multiline">
//        {urls.map((url) => {
//          return (
//            <div key={url} className="column is-3">
//              <Image src={url} />
//            </div>
//          );
//        })}
//        </div>
//      );
//    }

  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages().then((urls) => {
            setUrls(urls);
        });
      }, []);
    return (
      <main>
        <section className="section">
          <div className="container">

          </div>
        </section>
        <section className="section">
          <div className="containe">
          <Image urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
        <h1 className="has-text-primary">About Cat</h1>
        <button class="button is-fullwidth is-info is-light is-outlined">
              <a href="https://ja.wikipedia.org/wiki/%E3%83%8D%E3%82%B3">猫について</a>
        </button>
        <button class="button is-fullwidth is-warning is-outlined">
              <a href="https://cat.benesse.ne.jp/catlist/">猫の種類</a>
        </button>
        <button class="button is-fullwidth is-primary is-outlined">
              <a href="https://ranking.net/rankings/best-cat-characters">猫のキャラクター</a>
        </button>
        <br></br>
        <p>作成者の過去の作品</p>
        <button class="button is-warning">
          <a href="https://peaceful-lebkuchen-fa1ea8.netlify.app">Click!</a>
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <p>
            <a href="https://www.jsonapi.co/public-api/RandomCat">Donate to RandomCat API</a>
          </p>
          <p>引用：ウィキペディア、「ネコ」、(2023年1月17日)</p>
          <p>引用：ねこのきもちWEB MAGAZINE、「ねこのきもち　猫図鑑」(2023年1月17日)</p>
          <p>引用：みんなのランキング、「猫のキャラクターといえば？ネコのキャラ人気ランキングTOP66！」(2023年1月17日)</p>
          <p>webプログラミング最終課題</p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;
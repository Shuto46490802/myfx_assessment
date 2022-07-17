// import Image from "next/image"
import Link from "next/link"

const CashBack = () => {
    return (
        <section className="cash-back">
            <div className="container d-flex flex-column align-items-center">
                <div className="cash-back-step text-center">
                    <div className="d-block">
                        <img className="img-fluid" src={"/promotion-page-task/materials/norikae2022_ocashbackhouhou-1.gif"} width="350" height="29.05" alt="キャッシュバック方法" />
                    </div>
                    <span className="step d-inline-block mt-4 mb-2">
                        STEP1
                    </span>
                    <p className="small">まずは新規口座を開設！</p>
                    <Link href="#" ariaLabel="新規講座開設はこちら">
                        <a className="btn btn-lg btn-outline-primary">
                            新規講座開設はこちら
                        </a>
                    </Link>
                </div>
                <hr />
                <div className="cash-back-step text-center">
                    <span className="step d-inline-block mb-2">
                        STEP2
                    </span>
                    <p className="small">新規口座開設後、以下フォームからエントリー！</p>
                    <span className="is-title is-bold">乗り換えキャンペーン 2022</span>
                    <form>
                        <div className="form-group my-3">
                            <label htmlFor="name">お名前*</label>
                            <input className="form-control" type="text" name="name" id="name" placeholder="" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="email">メールアドレス*</label>
                            <input className="form-control" type="email" name="email" id="email" placeholder="" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password">MT4ログイン番号*</label>
                            <input className="form-control" type="password" name="password" id="password" placeholder="" />
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary">
                            キャッシュバックに応募
                        </button>
                    </form>
                </div>
                <hr />
                <div className="cash-back-step text-center">
                    <span className="step d-inline-block mb-2">
                        STEP3
                    </span>
                    <p className="small">
                        最低３万円以上をご入金頂き、10ロット以上のお取引を開始！
                        <br />
                        お取引ロット数によってキャッシュバック金額アップ！
                    </p>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img className="img-fluid" src={"/promotion-page-task/materials/norikae2022_step1-1-3.jpg"} width="300" height="143.7" alt="１０ロットで２０００円キャッシュバック、２０ロットで５０００円キャッシュバック" />
                        </div>
                        <div className="col-md-6 col-12">
                            <img className="img-fluid" src={"/promotion-page-task/materials/norikae2022_step1-2-3.jpg"} width="300" height="143.7" alt="５０ロットで１００００円キャッシュバック、１００ロットで３００００円キャッシュバック" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="cash-back-step text-center">
                    <p className="mb-5 d-block small">条件を満たされた方全員に、お取引数に応じた金額がお取引口座に入金されます！</p>
                    <img className="img-fluid" src={"/promotion-page-task/materials/norikae2022_step3-1.jpg"} width="400" height="120.4" alt="条件を満たされた方全員に、お取引数に応じた金額がお取引口座に入金されます！" />
                </div>
            </div>
        </section>
    );
}

export default CashBack;
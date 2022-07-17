const Hero = () => {
    return (
        <>
            <section className="hero position-relative">
                <div className="container">
                    <div className="hero-image" />
                </div>
            </section>
            <section className="hero-description">
                <div className="container">
                    <h2 className="text-center mb-5 is-title">MYFX Markets 乗り換えキャンペーン 2022</h2>
                    <div className="mb-3">
                        <h5 className="hero-description-text-title is-title">【キャンペーン期間】</h5>
                        <p>2022年2月1日 (火) ～2022年5月29日 (日)</p>
                    </div>
                    <div className="mb-3">
                        <h5 className="hero-description-text-title is-title">【キャンペーン内容】</h5>
                        <p>現在他社ブローカーをご利用頂いているお客様で、2022年2月1日から2022年5月29日までにMYFX Marketsに新規口座開設をお申込み頂き、条件を満たされた方を対象に、キャッシュバック致します。</p>
                    </div>
                    <div className="mb-3">
                        <h5 className="hero-description-text-title is-title">【対象となるお客様】</h5>
                        <p>
                            以下の条件を満たした個人のお客様。
                            <br />
                            １：現在他者ブローカーをご利用中のお客様（2021年10月31日以降にお取引をされていないお客様）
                            <br />
                            ２：MYFX Markets に新規口座開設お申込みのお客様
                        </p>
                    </div>
                    <div className="mb-3">
                        <h5 className="hero-description-text-title is-title">【キャッシュバック条件】</h5>
                        <p>
                            新規口座開設後、クレジットカード以外の入金方法で最低３万円以上ご入金後、お取引を開始。
                            <br />
                            キャンペーン期間中に10ロット以上お取引頂いたお客様には2,000円、20ロット以上お取引頂いたお客様には5,000円、50ロット以上お取引頂いたお客様にはお取引口座に10,000円、100ロット以上お取引いただいたお客様には30,000円を入金致します。
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
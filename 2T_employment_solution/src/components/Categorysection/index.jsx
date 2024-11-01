import Category from "~/components/Category";
import icons from "~/assets/icons";
import Image from "~/components/Image";
import classNames from "classnames/bind";
import styles from "./CategorySection.module.scss";

const cx = classNames.bind(styles);
function CategorySection() {
    return ( 
        <section className={cx("container")}>
             <div className={cx("header")}>
                <p className={cx("titleCenter")}>
                Browse By Category
                </p>
                <p className={cx("decriptions")}>
                You can locate the category in which your dream job can be found! 
                </p>
             </div>
             <div className={cx("categories")}>
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />
                <Category 
                 src={icons.estate}
                 name="Real Estate Jobs"
                description="70 Jobs Available"
                />

             </div>
             <div className={cx("fordwardAndBck")}>
                <Image src={icons.arrow_left}></Image>
                <Image src={icons.arrow_right}></Image>

             </div>
        </section>
       
     );
}

export default CategorySection;
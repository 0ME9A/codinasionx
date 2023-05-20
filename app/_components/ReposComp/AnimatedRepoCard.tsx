"use client";
import { childScaleReverse, container, scrollX } from "app/_framerVariants/framerVariants";
import { showoffRepoCardType } from "app/_types/Repos";
import { randomNum } from "app/_functions/functions";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link";

const colorDark = [
  'dark:fill-very-dark/50',
  'dark:fill-very-dark',
  'dark:fill-dark/50',
  'dark:fill-dark',
  'dark:fill-darkII/50',
  'dark:fill-darkII',
]
const color = [
  'fill-very-light/50',
  'fill-very-light',
  'fill-light/50',
  'fill-light',
  'fill-lightII/50',
  'fill-lightII',
]

export default function AnimatedRepoCard({ title, desc, repoUrl, style, status }: showoffRepoCardType) {
  return (
    <motion.article
      className={`w-full aspect-square dark:text-white rounded-3xl lg:rounded-[50px] p-6 xl:p-8 border-2 border-transparent hover:dark:border-black hover:border-white shadow-xl shadow-gray-500/10 relative overflow-hidden group ${style}`}
      variants={container}
      initial="hidden"
      whileInView="show">

      <motion.div
        variants={childScaleReverse}
        className="absolute top-0 left-0 w-full h-full">
        <svg
          id="visual"
          viewBox="0 0 900 900"
          width="900"
          height="900"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1">
          <path d="M0 82L13.7 85C27.3 88 54.7 94 82 103C109.3 112 136.7 124 163.8 137.5C191 151 218 166 245.2 169C272.3 172 299.7 163 327 157C354.3 151 381.7 148 409 149.5C436.3 151 463.7 157 491 154C518.3 151 545.7 139 573 125.5C600.3 112 627.7 97 654.8 104.5C682 112 709 142 736.2 160C763.3 178 790.7 184 818 173.5C845.3 163 872.7 136 886.3 122.5L900 109L900 0L886.3 0C872.7 0 845.3 0 818 0C790.7 0 763.3 0 736.2 0C709 0 682 0 654.8 0C627.7 0 600.3 0 573 0C545.7 0 518.3 0 491 0C463.7 0 436.3 0 409 0C381.7 0 354.3 0 327 0C299.7 0 272.3 0 245.2 0C218 0 191 0 163.8 0C136.7 0 109.3 0 82 0C54.7 0 27.3 0 13.7 0L0 0Z"
            className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
          <path d="M0 334L13.7 316C27.3 298 54.7 262 82 257.5C109.3 253 136.7 280 163.8 296.5C191 313 218 319 245.2 310C272.3 301 299.7 277 327 260.5C354.3 244 381.7 235 409 239.5C436.3 244 463.7 262 491 283C518.3 304 545.7 328 573 314.5C600.3 301 627.7 250 654.8 238C682 226 709 253 736.2 271C763.3 289 790.7 298 818 298C845.3 298 872.7 289 886.3 284.5L900 280L900 107L886.3 120.5C872.7 134 845.3 161 818 171.5C790.7 182 763.3 176 736.2 158C709 140 682 110 654.8 102.5C627.7 95 600.3 110 573 123.5C545.7 137 518.3 149 491 152C463.7 155 436.3 149 409 147.5C381.7 146 354.3 149 327 155C299.7 161 272.3 170 245.2 167C218 164 191 149 163.8 135.5C136.7 122 109.3 110 82 101C54.7 92 27.3 86 13.7 83L0 80Z"
            className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
          <path d="M0 559L13.7 556C27.3 553 54.7 547 82 535C109.3 523 136.7 505 163.8 518.5C191 532 218 577 245.2 601C272.3 625 299.7 628 327 619C354.3 610 381.7 589 409 577C436.3 565 463.7 562 491 557.5C518.3 553 545.7 547 573 526C600.3 505 627.7 469 654.8 464.5C682 460 709 487 736.2 530.5C763.3 574 790.7 634 818 629.5C845.3 625 872.7 556 886.3 521.5L900 487L900 278L886.3 282.5C872.7 287 845.3 296 818 296C790.7 296 763.3 287 736.2 269C709 251 682 224 654.8 236C627.7 248 600.3 299 573 312.5C545.7 326 518.3 302 491 281C463.7 260 436.3 242 409 237.5C381.7 233 354.3 242 327 258.5C299.7 275 272.3 299 245.2 308C218 317 191 311 163.8 294.5C136.7 278 109.3 251 82 255.5C54.7 260 27.3 296 13.7 314L0 332Z"
            className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
          <path d="M0 622L13.7 631C27.3 640 54.7 658 82 658C109.3 658 136.7 640 163.8 655C191 670 218 718 245.2 734.5C272.3 751 299.7 736 327 715C354.3 694 381.7 667 409 656.5C436.3 646 463.7 652 491 647.5C518.3 643 545.7 628 573 613C600.3 598 627.7 583 654.8 590.5C682 598 709 628 736.2 662.5C763.3 697 790.7 736 818 721C845.3 706 872.7 637 886.3 602.5L900 568L900 485L886.3 519.5C872.7 554 845.3 623 818 627.5C790.7 632 763.3 572 736.2 528.5C709 485 682 458 654.8 462.5C627.7 467 600.3 503 573 524C545.7 545 518.3 551 491 555.5C463.7 560 436.3 563 409 575C381.7 587 354.3 608 327 617C299.7 626 272.3 623 245.2 599C218 575 191 530 163.8 516.5C136.7 503 109.3 521 82 533C54.7 545 27.3 551 13.7 554L0 557Z"
            className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
          <path d="M0 901L13.7 901C27.3 901 54.7 901 82 901C109.3 901 136.7 901 163.8 901C191 901 218 901 245.2 901C272.3 901 299.7 901 327 901C354.3 901 381.7 901 409 901C436.3 901 463.7 901 491 901C518.3 901 545.7 901 573 901C600.3 901 627.7 901 654.8 901C682 901 709 901 736.2 901C763.3 901 790.7 901 818 901C845.3 901 872.7 901 886.3 901L900 901L900 566L886.3 600.5C872.7 635 845.3 704 818 719C790.7 734 763.3 695 736.2 660.5C709 626 682 596 654.8 588.5C627.7 581 600.3 596 573 611C545.7 626 518.3 641 491 645.5C463.7 650 436.3 644 409 654.5C381.7 665 354.3 692 327 713C299.7 734 272.3 749 245.2 732.5C218 716 191 668 163.8 653C136.7 638 109.3 656 82 656C54.7 656 27.3 638 13.7 629L0 620Z"
            className={`${color[randomNum(5)]} ${colorDark[randomNum(5)]}`}></path>
        </svg>
      </motion.div>

      <div className="w-full h-full absolute left-0 top-0 origin-center scale-90 bg-gray-500/10 rounded-3xl lg:rounded-[50px] backdrop-blur-sm group-hover:scale-100"></div>

      <Link
        href={`/repositories/${repoUrl}`}
        title={title}
        className={`w-full h-full relative p-3 flex justify-center items-center`}>
        <article className="w-full h-fit">
          <motion.h2
            title={title}
            variants={scrollX(-30)}
            className={`font-semibold text-3xl md:text-4xl capitalize`}>
            {title}
          </motion.h2>
          <motion.p variants={scrollX(-30)}
            className={`lg:w-[90%] text-lg md:text-xl dark:text-gray-300 text-gray-700 `}>
            {desc}</motion.p>
          <motion.ul variants={scrollX(-30)}
            className="flex gap-2 text-sm pt-3">
            <li title={`${status.stars} Stars`} className="flex border-2 items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black shadow-lg shadow-gray-500/50">
              <AiOutlineStar />
              <span className="repo-card-stat-count">{status.stars}</span>
            </li>
            <li title={`${status.forks} Forks`} className="flex border-2 items-center justify-center gap-2 p-1 px-3 rounded-full bg-white dark:bg-black shadow-lg shadow-gray-500/50">
              <GoRepoForked />
              <span className="repo-card-stat-count">{status.forks}</span>
            </li>
          </motion.ul>
        </article>
      </Link>
    </motion.article>
  )
}
interface Props {
    className?: string
}
function PatreonButton({className}: Props) {
    return (
        <a href="https://www.patreon.com/wowsims" target="_blank" rel="noopener noreferrer" className={`patreon-btn ${className}`} >
            <img src="data:image/png;base64,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" srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAAzCAYAAAAaYa2SAAAABGdBTUEAALGPC/xhBQAAC8VJREFUeAHtXQmwFMUZ/npmFpHzcQgBRSFcAnIfcimICEFEEFAEj5SlUMYkVTEKJpgQSSmSUGWMFimJUEQTFa8UEdAkGENEi0MBBQQMgiCX3Icc8t7MdP6/Z2d2dt/bdd/bHdis/Vc9tqePv3u+7r//ayzF2XvHSmjSCGgEIkPAiIyzZqwR0AgoBLSQ6YOgEYgYAS1kEQOs2WsEtJDpM6ARiBgBLWQRA6zZawS0kOkzoBGIGAEtZBEDrNlrBLSQ6TOgEYgYAS1kEQOs2WsEtJDpM6ARiBgBLWQRA6zZawS0kOkzoBGIGAEtZBEDrNlrBLSQ6TOgEYgYAS1kEQOs2WsErFwhKFlxKmAx+eIYHr60WvAcFBo3hXn1UBjtOgIlDYCyMsj9e+CuWwX3vbfpuTToqgsagWJDIGchs90EJE6iGJTMEeNgDL0JwjSDOlwIiDp1YbRuDzlkJOy5v4PctiXRrksagSJCIFJz0Rw/Eeb1Y5MFLAU8UVIf1k+mQbRql9KiHzUCxYFAZEImuvYmE3FIVigJKwbrnvuBC6pn1f+cd2rYGIK0LupfRCpYZJ6e3kU0awHRvFXhvk/mN/j/bi1A/HM2F9PtiDXilnRNFdaLuvVgkFC6S9+osD1TpfXwLBiXNE/qItnPO3yQ/L6VcP6xEDj7NdCoCapNfyqpX/jBWbEMzvOzvSrDhDl8LIxBwyGqk30bJ3nkEJxFL8Nducyv8n7rNYQ1YSJE+84QNJZJSgm5/b9wXpwDuXeX14/+Da9XOg7KptwNnE74tubNd8EcdH3Q3573JNwP36/c+oPRyQVz+M0wb/D2Rp46ibKfTQRsO7lTypPxvdGwRo5PqpUuOQeHDsD9dAOcxa8CJ44F7enmEC1aIzZlRtAvXaH0wbtgXDWk/JyEFY4egvv5VjhLaM79exMsqoi/vfAFuHw+4mQMHQVr1G3qqfQ+won2MFeKRpNRoEM0aVbptRldrqz0mPAA3nh5aD/kscMQsWoQ37kY5rAxsO68L9xNlaVjQ5Lghf9gl3n9DAPWA9M9U5cETLou5NdnVJuoT8L0/R/CuGZYwFM0vRSxaU/AuKKbEjB58ivI40dJ6QkYLdvC+vlvINp1CvqHC+yrGh27h6vKPSc1xh8yrr+iAfE6o8/AoFXUrAWjU8/gOZsCC6b86jhpdAOCLi2ThCE25TGgRs1geK5zBIziBcaS9xW0D4KsCrNnf8Qeehxo0Ej1yAV/ky4Q0AUfJUWiyfhwV4WqOi6Y6/gxlP3yR94jbUaMNBxrIdG5F2Amv6q77O9wXnsuGBouGAOHwfhuW1XlrF5OmuiPKgIqOnSBNfEBJcDm6DvgkuYDCZ85YZKah7WS86enPa1Do8XlHWFNehDiwhqk5Sah7Nc/TYqk8mEVtSkA1KUX3FXvqvlEk0sgLmoMeYLaKDiUjjKtP90YNnkFHUx1Ga1fo+Y1+lwDd+2KdEPK1duzZ0CSJgGt27r1Hhjdeiueis+/FiuzOt0ccuc2lE4mrR2n2CO/Bws6ayb7DzP9aoAEOUz2nFnenHRxmjfeCnPwCIWp2W8QnDcWVBl/noPPhzn6djjznw5PmddyJJqMfawqkZUsCFXi4Q86fAA4c1o9STYrSHNlSyaZiEwsBM5fnvFMTdZmG9YqYZBnTkHu3K6EQVzWUmkr7u+u+k8gYGr8lg1w6eAx8Q2cqrHUYeW29l0AOkCqX1yryR10kPNMLAhMPK+zOi7U7UnD1imp/EyMTchk5ouBKeMchCFOnkj8+aYY7024Pt1qyAVwN65NtNaohZzw/3KP4mX2uhoifqkmmOevlMdTnViUPHIw8VCZEvk7ORFpDPOm28npoeBD2ysg6jWA8qFenV+OrdGha7nD5S57C3LPFxTgaKj6q7RCSg7PeWkunBfmBPyM3gODsty8Pij7BZcEzfeBRFMyoUNaw6WbnQ8J+6NsTsr1H5L51kMNdT9ZF5R9XuHftOsnH7BCoqASax0md80KyI3rlKksuP7KAeQL/63CYWkra9WB2XdQ0Cz37laBnrzO4XOnfQULFGl5k9JBPrmbPkpySyqN/56dEHQBG517whx3N+yZD/ms8/objZDt2Ab2S0St2pVaLB+sXEipfsq7hYk3Ihx08NuUv5Zi1soNayApAMG+FJPyPfwB/i87/GGKCyRXVdQ/qS7UV7Ggm9wlwTKvuk5ttLPtU4gWbSBLz1JAYWN4lnLltOtPI2QGRXtZoDgYo8xD1go8N/k3Jvlp2QqZdS8dRNY8fDGQ78okSSNwIMjo1icvc6S+bOzHv0itgrP8n5CfkJBRoMKnJKzjlUl1KfgLCNivP48YuQHGpS1g9Bvss8rrbyRCRkY/nHeWwCL7OVuSFHRwSJPkQuzHsM/AxBqCE+Fm/8EUkOiKsqk/SGLNX5s47y1NqpO7d3qmYbxW1KWvU1KJ0wwc5fKDJOyQx4lzfqmxKNZSPinn3X+I/7off+AJGWkwuXWTOris/VBK0dEMlHb9acYYfT1Tkc0yX/uKmGfWKz/wslZkAn+WZnSoujq9P5t9ZDK7FL2VW9ZDRW/pYsjbHKHpuOiy6Ux4GG06qBbPT37W65Uj/jj4Jdy3F4EDIOaN4+C+m3wmvEly+zcaIaM1cSje7dQdRvPWWa3QWfiiCgln1TldJ44YfrFdtfKv4M+5rr0Bgj7lEi0vp2DCsWAkm7Ry08fBc7ggj1J0kkxN0aa9MlNw+mTQbI65kw7TIDIrd8JZMA9yXyI0L9ifigcw/AFhP6wijSopBM6RS0Hml+/PuOT7fRNlWn+5sQ0bBcl+DrRYoyaU68IRQScLIbOfnO4FIVI55HGOVNbOK/PVnNb9jyhB40CRU7c+cPxIzvjzXM5bf6WLZ4A6J0afAanT5/zs6fuc2VTAgG56e/ZMuN/wuRSbLzZFiPwAQQWcqlZFiWOO7iUoVcckWlJLzr/fVFVsfqokOQkcKChjdO+rtACH3dlcYwGTu3ZAaR4awSaZ0f86UqOeuSlIOxkDhipebFJx4KQcUY7KF3b/pnY3rinXLZcKk/xGNoE5FWGTP2k/Nzv4C9beo596x6rOcy7m4Pwkk6h2AVkpt6hyzvgzF9LCzut/VvwEf3CQZ4pMk6l1kmliP/ErsnWvhUl5pXDujM1DdlSdJa9lZ6Zk8+J1SxB7nIISdKDCZppLWk1u3wrQbesTJ5nDuS6ul+QH2U89CvedN+H26O/Z6RSQqDbjGUj6qNk3r7iv89KzKnzPZXvBXMQmP0rh6NqwbpsEOeYOleD1fVJOjNucBkgT4XTXf5AISuz6HDh2BKDkaibKtP7UcXxLM3EgR32QHerAkVKDLiM/Z1aZcH6IjdIEUc8hP9usLjRer9K8ZOaBLq9c8ed1c7LfpY8h+HvafFO0QqZW78JdvlT9KWeZv8K3SyHpawH1FUYe30h9aUF+ERPnrEBhfJdMQmfxK4RicsBCBTeEmTS7pASrIhIGe9ZUstHHk2YarHIyvoBxOoC/EpAfrU6MpTrOgXHeSHSkhDRpQCaVj9q62ROwA/sS/VNKbB5yX16/DIeoU/qFHzOuP9RRkB/DeSsmd+3KUItX5OCBMldpzSrXFYp+luucpuJczOFP7Sxa4F0KhJU1cgI4h8ZffuSCf8D75XkQU3+r9sGvy8evyPV/nVTr/cTnQFOaxTCtov/UJR8rPZ882PQsqQdJjj7o64OMRBE39gXZvJT7KA/jB0gyDtKNeUOgAPGPXpPlDb3zyIiDJNnm/jhpvW/3eVzst3zqAsQ/usDHt3yv9etrBHwEtJD5SOhfjUBECORsLp7sVzOipWm2GoHiQEBrsuLYR/0WBYyAFrIC3hy9tOJAQAtZceyjfosCRkALWQFvjl5acSCghaw49lG/RQEjoIWsgDdHL604ENBCVhz7qN+igBHQQlbAm6OXVhwIaCErjn3Ub1HACGghK+DN0UsrDgS0kBXHPuq3KGAEtJAV8ObopRUHAlrIimMf9VsUMAJayAp4c/TSigMBLWTFsY/6LQoYgf8BIVTf3IgGuLEAAAAASUVORK5CYII=" alt="Become a Patron!" />
        </a>
    )
  }
  
  export default PatreonButton
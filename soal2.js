function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aiueo]).+\1$/

    /*
    /  adalah pembuka dan penutup regex /
    ^ mencocokkan dengan item pertama
    () menyimpan nilai yang cocok di dalamnya
    [] mencocokkan dengan item yg diminta didalamnya
    + berapa banyak karakter yang ingin dicari (1)
    \1 mencocokkan dengan kecocokan sebelumnya

    */

    /*
     * Do not remove the return statement
     */
    return re;
}

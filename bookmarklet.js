javascript:(function()
{
    regex = /(\d+) U\.S\.C\. § (\d+)( \(\d{4}\))?/g

replace_str = '<a href="https://www.law.cornell.edu/uscode/text/$1/$2">$1 U.S.C. § $2$3</a>'

document.body.innerHTML = document.body.innerHTML.replace(regex, replace_str);
    regex = /(G\.(\s)?L\.\sc\.\s(\d+)(\,)\s§\s(\d+))/g

replace_str = '<a href="https://malegislature.gov/Laws/GeneralLaws/Chapter$3/Section$5">G.L. c.$3, § $5</a>'

document.body.innerHTML = document.body.innerHTML.replace(regex, replace_str);
regex = /((\d+) Mass. (\d+))/g

replace_str = '<a href="http://masscases.com/cases/sjc/$2/$2mass$3.html">$2 Mass. $3</a>'

document.body.innerHTML = document.body.innerHTML.replace(regex, replace_str);
})();

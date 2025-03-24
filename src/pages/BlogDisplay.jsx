import React from 'react';

const BlogDisplay = () => {
  return (
    <div className="w-full h-[90vh] bg-white relative pt-5 sm:pt-0">
      <iframe
        src="https://khetanutkarsh.wordpress.com/blog/?fbclid=PAZXh0bgNhZW0CMTEAAaZ2ozgjDym06QlqN98YVbJDbSLG-kG99j_mbQfTi3EGHOqdl1kGejhdbDY_aem_XQTZ_TlvbIVq2MjY3ffG6Q"
        title="WordPress Blog"
        width="100%"
        height="100%"
        className="border-none"
        style={{ minHeight: '100vh' }}
      />
    </div>
  );
};

export default BlogDisplay;